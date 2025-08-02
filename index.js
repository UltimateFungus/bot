import { solveChallenge, solveChallengeWorkers } from "altcha-lib";

import { encoder, decoder } from "./moo.js";

import WebSocket from "ws";

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 4200}, console.log("Listening on port 4200"));

wss.on("connection", ws => {
    console.log("open");
    ws.on("message", e => ((data = JSON.parse(e)) => {
        switch(data.type) {
            case "bot":
                console.log("sending bot");
                sendBot(data.server, data.name);
            break;
        }
    })())
})

async function solve(data) {
    const result = await solveChallengeWorkers(
        "./node_modules/altcha-lib/dist/worker.js",
        8,
        data.challenge,
        data.salt,
        data.algorithm,
        data.maxnumber
    );
    const tokenObj = JSON.stringify({
      algorithm: data.algorithm,
      challenge: data.challenge,
      number: result.number,
      salt: data.salt,
      signature: data.signature,
      took: result.took
    });
    const token = btoa(tokenObj);
    return token;
}
async function sendBot(server, name) {
        const rawData = await fetch('https://corsproxy.io/?url=' + "https://api.moomoo.io/verify");
        const data = await rawData.json();
        const token = await solve(data);
        new Bot(server, name, token);
}
class Bot {
	constructor(server, name, token) {
		this.ws = new WebSocket(`${server}/?token=${encodeURIComponent(`alt:${token}`)}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            }
        });
		this.ws.binaryType = "arraybuffer";
		const e = new encoder;
		const d = new decoder;
		this.send = function (e) {
			const t = Array.prototype.slice.call(arguments, 1),
				i = e.encode([e, t]);
			this.ws.send(i);
		};
		this.ws.onopen = e => {
			log("bot open");
			this.send("M", {
				name: name,
				moofoll: 1,
				skin: 0
			})
		}
		this.ws.onclose = e => log("bot close");
		this.ws.onmessage = e => {
			const uint = new Uint8Array(e.data)
			const data = d.decode(uint);
			switch (data[0]) {
				case "P":
					log("bot respawn");
					this.send("M", {
						name: name,
						moofoll: 1,
						skin: 0
					})
					break;
			}
		};

	}
}

