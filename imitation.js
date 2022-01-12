switch (Math.random() < 0.5) {
    case true:
        console.log(`
        > There is a cat in the box
<details>
  <summary>Box</summary>
  <pre>🐱‍💻</pre>
</details>`)
        break;
    case false:
        console.log(`
        > There is a cat in the box
<details>
  <summary>Box</summary>
  <pre> </pre>
</details>`)
        break;
}
