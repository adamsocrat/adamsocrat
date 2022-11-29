const qrng = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8';

function getUrl(url) {
        return new Promise(function (resolve, reject) {
                var XMLHttpRequest = require('xhr2');
                var request = new XMLHttpRequest();
                request.open('GET', qrng);
                request.onload = function () {
                        if (request.status == 200) {
                                resolve(request.responseText);
                        } else {
                                reject(Error(request.statusText));
                        }
                };
                request.onerror = function () {
                        reject(Error('Network Error'));
                };
                request.send();
        });
}

async function isItAlive() {
        const response = await getUrl(qrng);
        const result = JSON.parse(await response);
        if (result) {
                if (result["success"] == true) {
                        const data = result["data"][0];
                        if (data % 2 == 0) {
                                return true
                        }
                        else {
                                return false
                        }
                }
        }
}


switch (isItAlive()) {
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
  <pre>☠️</pre>
</details>`)
                break;
}
