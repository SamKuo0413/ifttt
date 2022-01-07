Obloq_http.Obloq_WIFI_setup(
SerialPin.P8,
SerialPin.P12,
"22-5-4",
"22933825"
)
let 測試 = 0
basic.forever(function () {
    basic.pause(10000)
    測試 += 1
    Obloq_http.sendToIFTTT(
    "homework",
    "dA92WK-746PJvhTzJIVecC",
    convertToText(測試)
    )
})
