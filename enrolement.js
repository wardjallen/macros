import xapi from "xapi"

const macroInstallURL = "https://raw.githubusercontent.com/wardjallen/docgen/main/bot.py"

// async function installMacro() {

// }

async function checkMacro() {
    try {
        //const res = await xapi.Command.HttpClient.Get({ url, Header, AllowInsecureHTTPS: true });
        const res = await xapi.Command.HttpClient.Get({ url: macroInstallURL });
        console.log(res.body)
    }
    catch(e) {
        console.log('error', e)
    }
}


async function init() {
    await xapi.Config.HttpClient.Mode.set('On');
    await xapi.Config.HttpClient.AllowHTTP.set('True');
    setTimeout(checkMacro, 10 * 1000);
}

init()