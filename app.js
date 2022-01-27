document.getElementById('button').addEventListener('click', loadData)

function loadData() {
  // create a XHR object
  const xhr = new XMLHttpRequest()

  // Open a new connection, using the GET request on the Text File
  xhr.open('GET', 'data.txt', true)

  // Getting Data from the Text File
  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById(
        'output'
      ).innerHTML = `<p>${this.responseText}</p>`
    }
  }
  // output any error
  xhr.onerror = function () {
    console.log('Request Error...')
  }

  // Send the request
  xhr.send()
}
