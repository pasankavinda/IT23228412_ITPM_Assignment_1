import { test, expect } from "@playwright/test";

const testCases = [
  {
    id: "Neg_Fun_0001",
    name: "Incorrect Sinhala character rendering",
    input: "suBha udhasanak machan",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0002",
    name: "Sentence with an URL (technical terms) ",
    input: "www.googel.com vetha pivisenna.",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0003",
    name: "Invalid special characters input",
    input: "^@#$%^&*()",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0004",
    name: "Empty input translation ",
    input: "       ",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0005",
    name: "English technical terms (File formats) ",
    input: "IMG.jpg",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0006",
    name: "Country Name Standard Spelling",
    input: "ovun magee ratata kiyanne Sri Lanka kiyalaa.",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0007",
    name: "SQL injection attempt",
    input: "mama SELECT * FROM users WHERE id='1' OR '1'='1'",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0008",
    name: "Script tag injection",
    input: "mama Singlish valin liyana dheeval eeka Sinhala valata haravaa dhenavaa.",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0009",
    name: "Convert sentence with  brand name",
    input: "mama heta Mr koththu ekata yanavaa.",
    expected: "something-wrong",
  },
  {
    id: "Neg_Fun_0010",
    name: "Missing vowel correction",
    input: "oyaata dhaen kohomdha?",
    expected: "something-wrong",
  },
];

test.describe("Negative Functional Tests (Expected to Fail)", () => {
  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "networkidle",
      });
      const inputArea = page.getByPlaceholder("Input Your Singlish Text Here.");
      const inputSelector =
        'textarea[placeholder="Input Your Singlish Text Here."]';
      await page.fill(inputSelector, "");
      await inputArea.click();
      await inputArea.pressSequentially(tc.input, { delay: 35 });
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.dispatchEvent(
          new CompositionEvent("compositionend", {
            bubbles: true,
            cancelable: true,
            data: (el as HTMLTextAreaElement).value,
          }),
        );
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }, inputSelector);
      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');
      // Force the test to always fail for demonstration
      expect(false).toBe(true);
      await page.close();
    });
  }
});
