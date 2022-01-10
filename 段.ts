namespace 段 {
    export import 句式 = 句.句式;
    export type 句典 = 句式[]

    export function 编(块: 布尔字节.输入块, 典: 句典, 输出: string[]) {
        for (; ;) {
            const t = 典[Math.floor(Math.random() * 典.length)]
            句.编(块, t, 输出)
            if (块.到头了()) return
            输出.push('；')
        }
    }

    export function 解(块: 布尔字节.输出块, 典: 句典, 输入: string) {
        输入.split('；').forEach(句子 => {
            for (let 式 of 典)
                if (句.解(块, 式, 句子))
                    break
        })
    }
}