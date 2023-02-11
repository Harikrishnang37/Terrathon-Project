import React , {useEffect, useState} from 'react'
import './Home.css'
import axios from 'axios'
import Product from './Product';

function Home() {

    const [products, setProducts] = useState("");

    useEffect(()=>{
        const fetchdata = async() =>{
            const pdata = await axios.get("http://localhost:8000/products/get");
            const data = pdata.data;
            console.log("products: ", data);

            setProducts(data);
        };
        fetchdata();
    }, []);

  return (
    <div className="home">
        <div className='home__container'>
            {/* <img className="image" src='https://imgs.search.brave.com/I8y7DOgVPCN9kt6MgqYYV-Hy79scRKjg4hzqEDn060Q/rs:fit:511:338:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L21hbnkta2luZHMt/b2YtdmVnZXRhYmxl/LWJsdXItc3R5bGUt/Zm9yLWJhY2tncm91/bmQtcGljdHVyZS1p/ZDUxNTUxOTAwMD9r/PTYmbT01MTU1MTkw/MDAmcz0xNzA2Njdh/Jnc9MCZoPWgyZzRP/ZkZjMGlWTUkyRDM1/NTZIRHQtWkJzbDU2/MnVQOWdOaHM1UVo4/TUE9'/> */}

            <div className='home__row'>
                <Product title="Onions" price={30.00} image='https://imgs.search.brave.com/-ZX7i2WvtvNfcPL-IQL1pcqW-V5WeypjsrIEO0jzVTs/rs:fit:1200:1025:1/g:ce/aHR0cHM6Ly93d3cu/b25pb25wYXRjaC5k/aXhvbmRhbGVmYXJt/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDgvb25p/b25zLTEwNzgxNDlf/MTkyMC0xNTM2eDEw/MjUuanBn' rating={2} />
                <Product title="Potatoes" price={30.00}
                image="https://imgs.search.brave.com/cO8hgB_OGrmY__p20mkHBHYOZ783guKgOwgtn1frQHA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YTIuZmRuY21zLmNv/bS9pbmxhbmRlci9p/bWFnZXIvdS9vcmln/aW5hbC8xOTcxMTg4/My9wb3RhdG9lcy5q/cGc" rating={5} />
                <Product title="Beans" price={50.00} image="https://imgs.search.brave.com/IUzaVpwI6yTGYBd1X3n7AMUoBH_BiSbpkadP5CHgrTo/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5v/ZmZ0aGVncmlkbmV3/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMTEvZ3Jl/ZW4tYmVhbnMtcHVi/bGljLWRvbWFpbi1w/aWN0dXJlcy5qcGc" rating={4} />
            </div>
            <div className='home__row'>
                <Product title="Carrots" price={60.00}
                image="https://imgs.search.brave.com/MlrPXA5YOnayr7G0RA3xK06H_1R9iEGrKy08hGvqiEk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mdGht/Yi50cW4uY29tLzNt/Y25lMXdQZlQ4Nk1X/YUtpei13N2JYUE5z/Yz0vMjE1MXgxMzk2/L2ZpbHRlcnM6Zmls/bChhdXRvLDEpLzEy/MDM3NjcyMS01NmEz/NDY3ZTNkZjc4Y2Y3/NzI3Y2E1NGEuanBn" rating={3}/>
                <Product title="Chillies" price={70.00}
                image="https://imgs.search.brave.com/6rj9FUeoXF7KnA6clpv6hH8LtomTH3igDNQVyfSqQ4Q/rs:fit:1200:819:1/g:ce/aHR0cHM6Ly9pbmR1/c2J1c2luZXNzam91/cm5hbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDUv/Q2hpbGxpZXMtZ3Jl/ZW4uanBn" rating={4}/>
                <Product title="Okra" price={60.00}
                image ="https://imgs.search.brave.com/y5HKMgQ89PHuQguX4X2FSOesMrbeUMfgd7vgc0hc4P4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3Lmhl/YWx0aGZpdG5lc3Ny/ZXZvbHV0aW9uLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9pU3RvY2st/NTIwODgzOTAyLmpw/Zz9maXQ9MjEyMCUy/QzE0MTUmc3NsPTE" rating={4} />
            </div>
            <div className='home__row'>
                <Product title="Okra Seeds" price={320.00}
                image="https://imgs.search.brave.com/GqYhJCgXC69NECEpUhRou06x_ion_6Y0dsNiOshZ5Ys/rs:fit:500:500:1/g:ce/aHR0cHM6Ly80Lmlt/aW1nLmNvbS9kYXRh/NC9XSS9RTy9NWS0z/MzE4ODcyL29rcmEt/c2VlZHMtNTAweDUw/MC5qcGc" rating={3}/>
                <Product title="Black soil" price={420.00}
                image="https://imgs.search.brave.com/TTy13ex8FNhuVt4u1e8Jl7tVepZiSGWw4MAI9O0xPQ4/rs:fit:800:533:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ibGFj/ay1zb2lsLXRleHR1/cmUtYmFja2dyb3Vu/ZC1nYXJkZW5pbmct/aWRlYXMtaWRlYS1w/bGFudGluZy1nYXJk/ZW5lcnMtMTcxNzM5/NTU4LmpwZw" rating={4}/>
                <Product title="Coco-Peat" price={510.00}
                image ="https://imgs.search.brave.com/qpeAmRKLnyWQYptbnXg6mX1Jv1jTRx-cNOBVBAjkHg0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90ZWFt/Z3JlZW4uY28uaW4v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDgvY29jb3BlYXQu/anBn" rating={4} />
            </div>

            {products && products.map((product) => {
                return <Product key = {product.productid} title={product.productname} price={product.price}
                image= "https://www.thedailymeal.com/img/gallery/what-you-probably-didnt-know-about-papayas/l-intro-1667926753.jpg" rating={product.rating}/>
            }
            )
            }
            

        </div>
    </div>
  )
}

export default Home;