function BiggestNumber() {
    this.one = new Decimal(1)
    this.two = new Decimal(2)
    this.three = new Decimal(3)
    this.four = new Decimal(4)
    this.five = new Decimal(5)
    this.six = new Decimal(6)
    this.seven = new Decimal(7)
    this.eight = new Decimal(8)
    this.nine = new Decimal(9)
    this.ten = new Decimal(10)
    this.hundred = new Decimal(100)
    this.thousand = new Decimal(1e3)
    this.tenThousand = new Decimal(1e4)
    this.hundredThousand = new Decimal(1e5)
    this.million = new Decimal(1e6)

    /**
     * Converts Two Power
     * @param {number} pow Convert Has "2 ** x" (or "Math.pow(2, x)")
     * @returns {string} Convert to 2 Of pow
     */
    this.twoOfPower = (pow) => new Decimal.pow(2, pow)

    /**
     * Converts Three Power
     * @param {number} pow Convert Has "3 ** x" (or "Math.pow(3, x)")
     * @returns {string} Convert to 3 Of pow
     */
     this.threeOfPower = (pow) => new Decimal.pow(3, pow)

     /**
     * Converts Four Power
     * @param {number} pow Convert Has "4 ** x" (or "Math.pow(4, x)")
     * @returns {string} Convert to 4 Of pow
     */
    this.fourOfPower = (pow) => new Decimal.pow(4, pow)

    /**
     * Converts Two Power
     * @param {number} pow Convert Has "2 ** x" (or "Math.pow(2, x)")
     * @returns {string} Convert to 2 Of pow
     */
     this.fiveOfPower = (pow) => new Decimal.pow(2, pow)

     /**
     * Converts Two Power
     * @param {number} pow Convert Has "2 ** x" (or "Math.pow(2, x)")
     * @returns {string} Convert to 2 Of pow
     */
    this.sixOfPower = (pow) => new Decimal.pow(2, pow)

    /**
     * Converts Two Power
     * @param {number} pow Convert Has "2 ** x" (or "Math.pow(2, x)")
     * @returns {string} Convert to 2 Of pow
     */
     this.sevenOfPower = (pow) => new Decimal.pow(2, pow)

     /**
     * Converts Two Power
     * @param {number} pow Convert Has "2 ** x" (or "Math.pow(2, x)")
     * @returns {string} Convert to 2 Of pow
     */
    this.eightOfPower = (pow) => new Decimal.pow(2, pow)

    /**
     * Converts Two Power
     * @param {number} pow Convert Has "2 ** x" (or "Math.pow(2, x)")
     * @returns {string} Convert to 2 Of pow
     */
     this.nineOfPower = (pow) => new Decimal.pow(2, pow)
}