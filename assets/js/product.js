const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const productList = $('.product-list')
const productItems = $$('.service-item')
const app = {


    products: [
        {
            id: 1,
            name: 'Kid',
            description: 'Tăng cường sức đề kháng, phát triển não bộ và thị giác, hệ tiêu hóa khỏe mạnh, giúp trẻ tăng cân',
            img: 'assets/images/milk-1.jpg',
        },
        {
            id: 2,
            name: 'Pedia',
            description: 'Giúp trẻ ăn ngon miệng, tăng cân, tăng cường tiêu hóa-hấp thu, tăng cường sức đề kháng',
            img: 'assets/images/milk-2.jpg',
        },
        {
            id: 3,
            name: 'IQ Grow',
            description: 'Giúp phát triển não bộ, tư duy, tăng cường hấp thu, sức đề kháng',
            img: 'assets/images/milk-3.jpg',
        },
        {
            id: 4,
            name: 'Goat Ba',
            description: 'Bổ sung nhiều dinh dưỡng, giúp trẻ ăn ngon miệng, tăng cân, hệ tiêu hóa khỏe mạnh',
            img: 'assets/images/milk-4.jpg',
        },
        {
            id: 5,
            name: 'Glucerna',
            description: 'Dành cho người bị tiểu đường, người từ 18 tuổi trở lên có nguy cơ tiểu đường',
            img: 'assets/images/milk-5.jpg',
        },
        {
            id: 6,
            name: 'MaMa',
            description: 'Bổ sung các chất dinh dưỡng giàu đạm, vitamin để duy trì và bồi bổ sức khỏe cho bà mẹ trước và sau sinh',
            img: 'assets/images/milk-6.jpg',
        },
        {
            id: 7,
            name: 'Cancer',
            description: 'Thích hợp cho người bị ung thư, trong quá trình hóa trị, xạ trị. Giúp tăng sức đề kháng, miễn dịch',
            img: 'assets/images/milk-7.jpg',
        },
        {
            id: 8,
            name: 'Xương khớp',
            description: 'Dành cho người bị loãng xương, có nguy cơ loãng xương, người từ 18 tuổi cần bổ sung canxi',
            img: 'assets/images/milk-8.jpg',
        } 
    ],
    
    renderProductList: function() {
        [...productItems].map((productItem, index) => {
            const productItemTitle = productItem.children[1].textContent
            productItem.onclick = function() {
                const productWrap = app.products.map(product  => {
                    if (productItemTitle == product.name) {
                        console.log(product);
                    }
                })
            }
        })
    },


    start: function() {
        this.renderProductList()
    }
};
// app.start()