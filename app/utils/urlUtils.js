export async function generateShortUrl(url) {
  let freshvalue = url.replace("https://", "")
  freshvalue = freshvalue.replace("http://", "")
  let freshvalue2 = encodeURIComponent(freshvalue)
  const response = await fetch(`https://chottourlserver.asiradnan.com/shorten/${freshvalue2}`)
  const data = await  response.json()
  console.log(data)
  return {
    shortUrl: data.shorturl,
    qrCode: data.qrcode
  };
}

