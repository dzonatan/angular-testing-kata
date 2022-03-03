# front-end testing kata (Angular edition)

## 🥋 Kata (2/3)

It's testing time!  
The app was given some random bugs that no longer satisfy the requirements.  
Will your tests going to catch them? Let's find out:

```sh
npm test
```

Can you easily tell what's broken without reading further?

<details>
  <summary>There are six bugs (expand me to see):</summary>

- the input field does not prevent adding an empty task anymore;
- the input field is no longer cleared upon add;
- the input field is no longer focused upon add;
- Enter key inside the input no longer submits the form;
- the task deletion no longer deletes the exact task that was selected;
- marking a task as completed/uncompleted no longer saves the changes into a local storage;

</details>

Did your tests caught all of them? Was it easy to tell what's broken?

### Why does this matter?

"The more your tests resemble the way your software is used, the more confidence they can give you." [Kent C. Dodds](https://twitter.com/kentcdodds/status/977018512689455106)

More on this:

- https://kentcdodds.com/blog/write-tests
- https://testing-library.com/docs/guiding-principles/

### 🏁 Finish

All right, let's give your tests another shot by switching to another branch.  
As before - keep your changes in the working directory (do not stash, commit or discard).  
Also, you do **not** need to fix the failing tests, keep them as is.

```sh
git checkout origin/3-kata
```

## 🔙 Want to go back?

```sh
git checkout origin/1-kata
```
