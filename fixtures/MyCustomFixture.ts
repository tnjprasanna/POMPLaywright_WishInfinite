import { test as baseTest } from "@playwright/test";

type MyFixtures = {
  fixture1: string;
};

type MyWorkerFixtures = {
  workerFixture: string;
};

export const test = baseTest.extend<MyFixtures, MyWorkerFixtures>({
  fixture1: async ({}, use) => {
    const fixture1 = "I am fixture";
    console.log("Before part of fixture 1");
    await use(fixture1);
    console.log("After part of fixture 1");
  },

  workerFixture: [async ({}, use) => {
    const workerFixture = "I am worker fixture";
    console.log("Before part of worker fixture");
    await use(workerFixture);
    console.log("After part of worker fixture");
  }, { scope: "worker" }]
});