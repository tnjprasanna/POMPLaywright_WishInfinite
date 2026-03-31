import { test } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// Define the expected structure of each row
interface CsvRecord {
  id: string;
  firstName: string;
  lastName: string;
}

const records: CsvRecord[] = parse(fs.readFileSync('testData/testData.csv'), {
  columns: true,
  skip_empty_lines: true
});

records.forEach((record) => {
  test(`Get data from CSV for ${record.firstName}`, async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.getByPlaceholder('First Name').fill(record.firstName);
    await page.getByPlaceholder('Last Name').fill(record.lastName);
  });
});