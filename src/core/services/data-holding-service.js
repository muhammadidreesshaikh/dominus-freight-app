class DataHolding {

    constructor() {
        this.data = {};
    }

    getData(data) {
        this.data = data;
        // console.log(data);
    }

    setData() {
        return this.data;
    }

}
export default new DataHolding;