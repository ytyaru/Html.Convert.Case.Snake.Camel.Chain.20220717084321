class TestCaser {
    constructor() {}
    run() {
        this.testSnakeCamel()
        this.testSnakeCain()
        this.testCamelSnake()
        this.testCamelChain()
        this.testChainSnake()
        this.testChainCamel()
        this.testAnother1()
        this.testAnother2();
        this.#finished()
    }
    #finished() { console.log('%cテスト完了！', `color:green; font-size:24px;`) }
    testSnakeCamel() {
        let actual = 'java_script'
        let expected = 'javaScript'
        console.assert(Snake.toCamel(actual)===expected)
        console.assert(Snake.toCamel(actual, true)==='JavaScript')
        console.assert(Snake.toCamel(actual.toUpperCase())===expected)
        console.assert(Snake.toCamel(actual.toUpperCase(), true)==='JavaScript')
    }
    testSnakeCain() {
        let actual = 'java_script'
        let expected = 'java-script'
        console.assert(Snake.toChain(actual)===expected)
        console.assert(Snake.toChain(actual, true)===expected.toUpperCase())
        console.assert(Snake.toChain(actual.toUpperCase())===expected)
        console.assert(Snake.toChain(actual.toUpperCase(), true)===expected.toUpperCase())
    }
    testCamelSnake() {
        let actual = 'javaScript'
        let expected = 'java_script'
        console.assert(Camel.toSnake(actual)===expected)
        console.assert(Camel.toSnake(actual, true)===expected.toUpperCase())
        console.assert(Camel.toSnake('JavaScript')===expected)
        console.assert(Camel.toSnake('JavaScript', true)===expected.toUpperCase())
    }
    testCamelChain() {
        let actual = 'javaScript'
        let expected = 'java-script'
        console.assert(Camel.toChain(actual)===expected)
        console.assert(Camel.toChain(actual, true)===expected.toUpperCase())
        console.assert(Camel.toChain('JavaScript')===expected)
        console.assert(Camel.toChain('JavaScript', true)===expected.toUpperCase())
    }
    testChainSnake() {
        let actual = 'java-script'
        let expected = 'java_script'
        console.assert(Chain.toSnake(actual)===expected)
        console.assert(Chain.toSnake(actual, true)===expected.toUpperCase())
        console.assert(Chain.toSnake(actual.toUpperCase())===expected)
        console.assert(Chain.toSnake(actual.toUpperCase(), true)===expected.toUpperCase())
    }
    testChainCamel() {
        let actual = 'java-script'
        let expected = 'javaScript'
        console.assert(Chain.toCamel(actual)===expected)
        console.assert(Chain.toCamel(actual, true)==='JavaScript')
        console.assert(Chain.toCamel(actual.toUpperCase())===expected)
        console.assert(Chain.toCamel(actual.toUpperCase(), true)==='JavaScript')
    }
    testAnother1() { // 略語の連続した大文字も単語区切りとして分割されてしまうので注意
        let actual = 'toHTML'
        let expected = 'to_h_t_m_l'
        console.assert(Camel.toSnake(actual)===expected)
        actual = 'toHtml' // キャメルケースにするなら略語としての大文字でなく単語の区切りとして大文字を使うこと
        expected = 'to_html'
        console.assert(Camel.toSnake(actual)===expected)
    }
    testAnother2() { // 先頭に区切り文字がある場合、先頭が大文字になってしまう（pythonはprivateを意味するため__をプレフィクスにする。その場合キャメルにすると先頭が大文字になってしまう。大文字小文字は第二引数でのみ決定すべきでは？　また、先頭と末尾についた区切り文字は消去すべきかそのまま付与すべきか？キャメルとしては消去が正しいはず。pythonの__は特殊ケースとして考えないことにする。あくまで単語の区切りとして解釈する）
        let actual = '_to_html'
        let expected = 'ToHtml'
        console.assert(Snake.toCamel(actual)===expected)
        console.assert(Snake.toCamel('___to_html')===expected)
        console.assert(Snake.toCamel('___to___html')===expected)
        console.assert(Snake.toCamel('___to___html___')===expected)
        actual = '-to-html'
        expected = 'ToHtml'
        console.assert(Chain.toCamel(actual)===expected)
        console.assert(Chain.toCamel('---to-html')===expected)
        console.assert(Chain.toCamel('---to---html')===expected)
        console.assert(Chain.toCamel('---to---html---')===expected)
    }
    // そもそも単語の区切りが曖昧。
    // username, user-name
    // password, pass-word
    // txid, tx-id
    // キャメルケースのとき略語を大文字にすると単語の境界がわからなくなる。略語は一単語とし先頭大文字でほかは小文字にすること。
    // html, HTML, Html
    // HTMLReader, HtmlReader, html-reader
}
new TestCaser().run()
