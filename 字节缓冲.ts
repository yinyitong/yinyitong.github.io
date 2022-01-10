class 字节缓冲 {
    再来(多长: number): Uint8Array {
        while (this.长度 + 多长 > this.数据.length) {
            const 新数据 = new Uint8Array(this.数据.length << 1)
            for (let i = 0; i < this.长度; ++i) 新数据[i] = this.数据[i]
            this.数据 = 新数据
        }
        this.长度 += 多长
        return this.数据.subarray(this.长度 - 多长, this.长度)
    }

    结果(): Uint8Array {
        return this.数据.subarray(0, this.长度)
    }

    private 数据: Uint8Array = new Uint8Array(16)
    private 长度: number = 0
}