namespace 句 {
    export type 句式 = string[][]

    export function 编(块: 布尔字节.输入块, 式: 句式, 输出: string[]) {
        式.forEach(可选词 => {
            输出.push(可选词[不随机.生成编号(块, 可选词.length)])
        })
    }

    function 匹配(a: string, 偏移: number, b: string): boolean {
        for (let i = 0; i < b.length; ++i)
            if (a[偏移 + i] !== b[i]) return false
        return true
    }

    export function 解(块: 布尔字节.输出块, 式: 句式, 输入: string): boolean {
        const 状态 = new Array<number>(式.length)
        let 指 = 0, 偏移 = 0
        状态[0] = 0
        for (; ;)
            if (匹配(输入, 偏移, 式[指][状态[指]])) {
                偏移 += 式[指][状态[指]].length
                if (++指 === 式.length) {
                    for (let i = 0; i < 指; ++i)
                        不随机.提取编号(块, 式[i].length, 状态[i])
                    return true
                }
                状态[指] = 0
            } else
                while (++状态[指] === 式[指].length) {
                    if (指-- === 0) return false
                    偏移 -= 式[指][状态[指]].length
                }
    }
}