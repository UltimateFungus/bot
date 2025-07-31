const thisServerAddress = "wss://sgs-wctwk-clcg4.frankfurt.moomoo.io";
const solver = new WebSocket("ws://localhost:10000");
solver.onclose = e => console.log(e);

solver.onopen = () => {
    console.log("open");
    challenge();
}
solver.onmessage = m => ((data = JSON.parse(m.data)) => {
    if (data.type = "token") {
        const token = data.token;
        new Bot("nuts", token);
    }
})();
function challenge() {
    async function request() {
        const rawData = await fetch('https://corsproxy.io/?url=' + "https://api.moomoo.io/verify");
        const data = await rawData.json()
        return data
    }
    if(solver.readyState === solver.OPEN) {
        request().then(data =>
        solver.send(JSON.stringify({
            "type": "solve",
            "data": data
        }))
    )
    }
}
class Bot {
	constructor(name, token) {
		this.ws = new WebSocket(`${thisServerAddress}/?token=${encodeURIComponent(`alt:${token}`)}`);
        this.ws.onopen = e => console.log("open");
        this.ws.onclose = e => console.log(e);
        this.ws.onerror = e => console.log(e);
	}
}