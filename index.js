import { solveChallenge, solveChallengeWorkers } from "altcha-lib";

async function solve(data) {
    const result = await solveChallenge(
        data.challenge,
        data.salt,
        data.algorithm,
        data.maxnumber
    ).promise;
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

const thisServerAddress = "wss://sgs-wctwk-8f2pw.frankfurt.moomoo.io";

async function challenge() {
        const rawData = await fetch('https://corsproxy.io/?url=' + "https://api.moomoo.io/verify");
        const data = await rawData.json();
        console.log(data);
        const token = await solve(data);
        new Bot("hi",token);
}
challenge();
class Bot {
	constructor(name, token) {
        console.log("SENT");
		this.ws = new WebSocket(`${thisServerAddress}/?token=${encodeURIComponent(`alt:${token}`)}`);
        this.ws.onopen = e => console.log("open");
        this.ws.onclose = e => console.log(e);
        this.ws.onerror = e => console.log(e);
	}
}