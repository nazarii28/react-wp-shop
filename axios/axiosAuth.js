import axios from "axios";

export default axios.create({
    baseURL: 'http://react-sanina-wp/wp-json/wc/v3/',
    params: {
        consumer_key: 'ck_206c3445cfb2b155c3482b1a08c6a12e1d189ecb',
        consumer_secret: 'cs_1d668aa423e64059fa8ab78244a182a1962fa8d9'
    }
})