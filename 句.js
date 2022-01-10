var 句;
(function (句) {
    function 编(块, 式, 输出) {
        式.forEach(可选词 => {
            console.log(可选词);
            输出.push(可选词[不随机.生成编号(块, 可选词.length)]);
        });
    }
    句.编 = 编;
    function 匹配(a, 偏移, b) {
        for (let i = 0; i < b.length; ++i)
            if (a[偏移 + i] !== b[i])
                return false;
        return true;
    }
    function 解(块, 式, 输入) {
        const 状态 = new Array(式.length);
        let 指 = 0, 偏移 = 0;
        状态[0] = 0;
        for (;;)
            if (匹配(输入, 偏移, 式[指][状态[指]])) {
                偏移 += 式[指][状态[指]].length;
                if (++指 === 式.length) {
                    for (let i = 0; i < 指; ++i)
                        不随机.提取编号(块, 式[i].length, 状态[i]);
                    return true;
                }
                状态[指] = 0;
            }
            else
                while (++状态[指] === 式[指].length) {
                    if (指-- === 0)
                        return false;
                    偏移 -= 式[指][状态[指]].length;
                }
    }
    句.解 = 解;
})(句 || (句 = {}));
//# sourceMappingURL=%E5%8F%A5.js.map