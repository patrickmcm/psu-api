const psu = require("psu-obf-api");
const fs = require("fs")
const apiKey = "apikeyhere"

function read(file, callback) {
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        }
        callback(data);
    });
}

const fileTobeObfuscated = read('putscripthere.txt', function(data) {

// settings you want here
let options = {
    "DisableSuperOperators": false,
    "MaximumSecurityEnabled": false,
    "ControlFlowObfuscation": true,
    "ConstantEncryption": false,
    "EncryptAllStrings": false,
    "DisableAllMacros": false,
    "EnhancedOutput": false,
    "EnhancedConstantEncryption": false,
    "CompressedOutput": false,
    "PremiumFormat": true,
    "ByteCodeMode": "Default"

}
let scriptObfuscation = psu.obfuscate(apiKey,data,options)
.then(result => {
    fs.writeFile('output.txt', result.data, function(err) {
        console.log("Obfuscation done, saved to output file.")
      });
})
});
