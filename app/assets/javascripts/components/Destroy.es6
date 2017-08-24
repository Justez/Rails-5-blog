export default (url, returnUrl) => {
  return (
    fetch(url, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials : "same-origin"
      })
      .then(response => {
        if (response.ok) {
          window.location.href = returnUrl;
        }
      }
    )
  )
}