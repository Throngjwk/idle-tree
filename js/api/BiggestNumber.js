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
     * Converts Five Power
     * @param {number} pow Convert Has "5 ** x" (or "Math.pow(5, x)")
     * @returns {string} Convert to 5 Of pow
     */
     this.fiveOfPower = (pow) => new Decimal.pow(5, pow)

     /**
     * Converts Six Power
     * @param {number} pow Convert Has "6 ** x" (or "Math.pow(6, x)")
     * @returns {string} Convert to 6 Of pow
     */
    this.sixOfPower = (pow) => new Decimal.pow(6, pow)

    /**
     * Converts Seven Power
     * @param {number} pow Convert Has "7 ** x" (or "Math.pow(7, x)")
     * @returns {string} Convert to 7 Of pow
     */
     this.sevenOfPower = (pow) => new Decimal.pow(7, pow)

     /**
     * Converts Eight Power
     * @param {number} pow Convert Has "8 ** x" (or "Math.pow(8, x)")
     * @returns {string} Convert to 8 Of pow
     */
    this.eightOfPower = (pow) => new Decimal.pow(8, pow)

    /**
     * Converts Nine Power
     * @param {number} pow Convert Has "9 ** x" (or "Math.pow(9, x)")
     * @returns {string} Convert to 9 Of pow
     */
     this.nineOfPower = (pow) => new Decimal.pow(9, pow)

     /**
     * Converts Ten Power
     * @param {number} pow Convert Has "10 ** x" (or "Math.pow(10, x)")
     * @returns {string} Convert to 10 Of pow
     */
      this.tenOfPower = (pow) => new Decimal.pow(10, pow)

      /**
     * Converts Hundred Power
     * @param {number} pow Convert Has "100 ** x" (or "Math.pow(100, x)")
     * @returns {string} Convert to 100 Of pow
     */
     this.hundredOfPower = (pow) => new Decimal.pow(100, pow)

     /**
     * Converts Thousand Power
     * @param {number} pow Convert Has "1000 ** x" (or "Math.pow(1000, x)")
     * @returns {string} Convert to 1000 Of pow
     */
      this.thousandOfPower = (pow) => new Decimal.pow(1e3, pow)

      /**
     * Converts Ten Thousand Power
     * @param {number} pow Convert Has "1e4 ** x" (or "Math.pow(1e4, x)")
     * @returns {string} Convert to 1e4 Of pow
     */
     this.tenThousandOfPower = (pow) => new Decimal.pow(1e4, pow)

     /**
     * Converts Hundred Thousand Power
     * @param {number} pow Convert Has "1e5 ** x" (or "Math.pow(1e5, x)")
     * @returns {string} Convert to 1e5 Of pow
     */
      this.hundredThousandOfPower = (pow) => new Decimal.pow(1e5, pow)

      /**
     * Converts Million Power
     * @param {number} pow Convert Has "1e6 ** x" (or "Math.pow(1e6, x)")
     * @returns {string} Convert to 1e6 Of pow
     */
       this.hundredThousandOfPower = (pow) => new Decimal.pow(1e6, pow)

    /**
     * Addiontial Math
     * @param {number} a Addiontal Math is done know a + b from mulitipler.
     * @param {number} b Addiontal Letter 2
     * @returns {string} Convert to Addiontail
     */
     this.addiontial = (a, b) => new Decimal(a).add(b) 

    /**
     * Mulitipler Math
     * @param {number} a Mulitipler Letter 1 know a * b from power.
     * @param {number} b Mulitipler Letter 2
     * @returns {string} Convert to Addiontail
     */
     this.mulitipler = (a, b) => new Decimal(a).mul(b) 

     /**
     * Divide Math
     * @param {number} a Divide Letter 1
     * @param {number} b Divide Letter 2
     * @returns {string} Convert to Divide
     */
      this.divide = (a, b) => new Decimal(a).div(b) 

    /**
     * Power Math
     * @param {number} a Power Letter 1 get a a ^ b from tertate
     * @param {number} b Power Letter 2
     * @returns {string} Convert to Divide
     */
     this.divide = (a, b) => new Decimal(a).pow(b) 

     /**
     * Logratim Math
     * @param {number} a Logratim Letter 1 (log(b)(10))
     * @param {number} b Logratim Letter 2
     * @returns {string} Convert to Logratim
     */
      this.logratim = (a, b) => new Decimal(a).log(b) 

    /**
     * Tertate Math
     * @param {number} a Tertate Letter 1
     * @param {number} b Tertate Letter 2
     * @returns {string} Convert to Tertate
     */
     this.logratim = (a, b) => new Decimal(a).tetrate(b) 

     /**
     * Floor Math
     * @param {number} a Floor Letter 1
     * @returns {string} Convert to Floor
     */
      this.logratim = (a) => new Decimal(a).floor() 
}

BiggestNumber = new BiggestNumber();