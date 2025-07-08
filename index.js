const ipv6Addresses = [
    "9d8c:0c65:88ae:7030:0a74:c1e2:a6e7:e50b",
    "277b:096e:2b0e:4250:f093:e45c:b7c4:9fbd",
    "5ffe:7fc3:74f5:d6ba:2041:a43a:aaa7:ee14",
    "ac11:e7fb:bc93:71f8:e11a:3ccf:56a5:10a4",
    "36a6:a765:adb9:117c:452b:1c9f:d76c:bbe5",
    "3a26:beb3:fda5:67a5:8a9b:4d54:bb70:8c2f",
    "a7bf:0eec:8b60:2621:5ef3:8598:d70b:9c77",
    "7c59:ea53:dbef:761e:a27b:7f55:200a:45c0",
    "bcfe:4e0b:915e:ad91:381f:f491:244f:6750",
    "0993:afad:7bad:9830:8f14:2f07:9a6c:07c4",
    "da97:78eb:debf:8607:9179:d69e:7147:3245",
    "6a4e:e5bf:a39a:4697:4281:06ab:fccc:8492",
    "cef6:64da:09c5:63a8:95e4:3e77:f347:1da3"

];
const randomIndex = Math.floor(Math.random() * ipv6Addresses.length);
const randomIpv6Address = ipv6Addresses[randomIndex];

const data = await fetch('https://api.moomoo.io/verify', {
    headers:  {
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/jxl,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7",
        "content-type": "application/json",
        "cache-control": "max-age=0",
        dnt: 1,
        "if-none-match": 'W/"fd-QsH14kNLu4rVG0GnUePKZ52MW9Y"',
        priority: "u=0, i",
        "sec-ch-ua": '"Not?A_Brand";v="99", "Chromium";v="130"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "Windows",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "sec-gpc": 1,
        "upgrade-insecure-requests": 1,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        "X-Forwarded-For": randomIpv6Address,
        "Referrer-Policy": "unsafe-url"
    }
});
console.log(data);