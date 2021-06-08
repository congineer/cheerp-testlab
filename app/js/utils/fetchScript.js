// Fetch script on demand from remote
export default function fetchScript (src, callback) {
  const scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    document.head.appendChild(script)
    script.onload = resolve
    script.onerror = reject
    script.async = true
    script.src = src
  })

  scriptPromise.then(() => { console.log(`--> fetched script: ${src}`); callback() })
}
