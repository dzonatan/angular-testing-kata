# front-end testing kata (Angular edition)

## 🥋 Kata (3/3)

Now, let's see how resilient your tests are to the changes of implementation details.  
Run your tests:

```sh
npm test
```

Are they still passing? If not, then it's very likely your tests are tied up with the implementation details which should be **avoided**.  
Try to self-assess how much time you would have to spend fixing those failing tests.

### Why does this matter?

You want to write maintainable tests for your Angular components. As a part of this goal, you want your tests to avoid including implementation details of your components and rather focus on making your tests give you the confidence for which they are intended. As part of this, you want your test base to be maintainable in the long run so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down ([ref](https://testing-library.com/docs/angular-testing-library/intro#the-problem)).

More on this:

- https://kentcdodds.com/blog/testing-implementation-details
- https://testing-library.com/docs/guiding-principles
- https://testing-library.com/docs/angular-testing-library/intro#the-problem

### 🏁 Finish

We're near the finish. One more branch to go:

```sh
git checkout origin/4-the-end
```

## 🔙 Want to go back?

```sh
git checkout origin/2-kata
```
