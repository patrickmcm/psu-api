const { obfuscate } = require("psu-obf-api");
const { readFile, writeFile } = require("fs").promises;
const apiKey = "apikeyhere"; // modify this to your key
// you can modify the settings below
const options = {
    "DisableSuperOperators": false,
    "MaximumSecurityEnabled": false,
    "ControlFlowObfuscation": true,
    "ConstantEncryption": false,
    "EncryptAllStrings": false,
    "DisableAllMacros": false,
    "EnhancedOutput": false,
    "EnhancedConstantEncryption": false,
    "CompressedOutput": false,
    "PremiumFormat": false,
    "ByteCodeMode": "Default"

};

(async () => {
    try { 
        const script = await readFile("./putscripthere.txt", { encoding: "utf8" });
        const { data } = await obfuscate(apiKey, script, options);
        await writeFile("./output.lua", data);
        console.log("Done");
    } catch (e) {
        console.error(e);
    };
})();