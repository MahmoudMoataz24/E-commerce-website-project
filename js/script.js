            //const items=document.querySelector(".parent").children;
            const items= document.getElementById('parent');
            const prev=document.querySelector(".prev");
            const next=document.querySelector(".next");
            const maxItem=3;
            let index=1;
            
          

            // $(items).empty();
            // if(index==1){
            //     $(maxItem).show();
            // }

            





            const api_url=" https://afternoon-falls-30227.herokuapp.com/api/v1/products/";
            async function getApi(){
                const response = await fetch (api_url);
                const data = await response.json();
                console.log(data.data);
                const{page,category,limit,total_items}=data;
                //document.getElementById('img').textContent=data.data[0].Category;
                 const a=document.getElementById('one');
                 const b=document.getElementById('two');
                 const c=document.getElementById('three');
                 const d=document.getElementById('four');
                 const e=document.getElementById('five');
                 const f=document.getElementById('six');
                 const g=document.getElementById('seven');
                 const h=document.getElementById('eight');
                 const k=document.getElementById('nine');
                 const j=document.getElementById('ten');


                 const aa=document.getElementById('onee');
                 const bb=document.getElementById('twoo');
                 const cc=document.getElementById('threee');
                 const dd=document.getElementById('fourr');
                 const ee=document.getElementById('fivee');
                 const ff=document.getElementById('sixx');
                 const gg=document.getElementById('sevenn');
                 const hh=document.getElementById('eightt');
                 const kk=document.getElementById('ninee');
                 const jj=document.getElementById('tenn');



                 const aaa=document.getElementById('nee');
                 const bbb=document.getElementById('woo');
                 const ccc=document.getElementById('hreee');
                 const ddd=document.getElementById('ourr');
                 const eee=document.getElementById('ivee');
                 const fff=document.getElementById('ixx');
                 const ggg=document.getElementById('evenn');
                 const hhh=document.getElementById('ightt');
                 const kkk=document.getElementById('inee');
                 const jjj=document.getElementById('enn');



                //for(i=0;i<10;i++){
                // document.write(data.data[i].Price);
                // document.write(data.data[i].Category);
                // document.write(data.data[i].ProductId);
                // console.log(data.data[i].ProductId);
                // console.log(data.data[i].Category);
                // console.log(data.data[i].ProductPicUrl);
                // document.getElementById('data').textContent=data;
                // document.getElementById('cat').textContent=category;
                // document.getElementById('pag').textContent=page;
                // document.getElementById('lim').textContent=limit;
                // document.getElementById('total').textContent=total_items;
                // const blob=data.data[i].ProductPicUrl;
                // console.log(blob);
                // document.getElementById('img').src=blob;
                // let newItem =document.createElement('p');
                // let newI =document.createElement('p');
                // let newIt =document.createElement('p');
                
                 
                // newI.textContent=data.data[i].Category;
                // newIt.textContent=data.data[i].ProductId;
                let one =document.createElement('img');
                let two =document.createElement('img');
                let three =document.createElement('img');
                let four =document.createElement('img');
                let five =document.createElement('img');
                let six =document.createElement('img');
                let seven =document.createElement('img');
                let eight =document.createElement('img');
                let nine =document.createElement('img');
                let ten =document.createElement('img');

                let onee =document.createElement('p');
                let twoo =document.createElement('p');
                let threee =document.createElement('p');
                let fourr =document.createElement('p');
                let fivee =document.createElement('p');
                let sixx =document.createElement('p');
                let sevenn =document.createElement('p');
                let eightt =document.createElement('p');
                let ninee =document.createElement('p');
                let tenn =document.createElement('p');



                let nee =document.createElement('p');
                let woo =document.createElement('p');
                let hreee =document.createElement('p');
                let ourr =document.createElement('p');
                let ivee =document.createElement('p');
                let ixx =document.createElement('p');
                let evenn =document.createElement('p');
                let ightt =document.createElement('p');
                let inee =document.createElement('p');
                let enn =document.createElement('p');


                onee.textContent=data.data[0].Price;
                twoo.textContent=data.data[1].Price;
                threee.textContent=data.data[2].Price;
                fourr.textContent=data.data[3].Price;
                fivee.textContent=data.data[4].Price;
                sixx.textContent=data.data[5].Price;
                sevenn.textContent=data.data[6].Price;
                eightt.textContent=data.data[7].Price;
                ninee.textContent=data.data[8].Price;
                tenn.textContent=data.data[9].Price;

                nee.textContent=data.data[0].Category;
                woo.textContent=data.data[1].Category;
                hreee.textContent=data.data[2].Category;
                ourr.textContent=data.data[3].Category;
                ivee.textContent=data.data[4].Category;
                ixx.textContent=data.data[5].Category;
                evenn.textContent=data.data[6].Category;
                ightt.textContent=data.data[7].Category;
                inee.textContent=data.data[8].Category;
                enn.textContent=data.data[9].Category;

                one.src=data.data[0].ProductPicUrl;
                two.src=data.data[1].ProductPicUrl;
                three.src=data.data[2].ProductPicUrl;
                four.src=data.data[3].ProductPicUrl;
                five.src=data.data[4].ProductPicUrl;
                six.src=data.data[5].ProductPicUrl;
                seven.src=data.data[6].ProductPicUrl;
                eight.src=data.data[7].ProductPicUrl;
                nine.src=data.data[8].ProductPicUrl;
                ten.src=data.data[9].ProductPicUrl;
            

                aa.appendChild(onee);
                bb.appendChild(twoo);
                cc.appendChild(threee);
                dd.appendChild(fourr);
                ee.appendChild(fivee);
                ff.appendChild(sixx);
                gg.appendChild(sevenn);
                hh.appendChild(eightt);
                kk.appendChild(ninee);
                jj.appendChild(tenn);
                

                // mydiv.appendChild(newItem);
                // mydiv.appendChild(newI);
                // mydiv.appendChild(newIt);
                a.appendChild(one);
                b.appendChild(two);
                c.appendChild(three);
                d.appendChild(four);
                e.appendChild(five);
                f.appendChild(six);
                g.appendChild(seven);
                h.appendChild(eight);
                k.appendChild(nine);
                j.appendChild(ten);



                aaa.appendChild(nee);
                bbb.appendChild(woo);
                ccc.appendChild(hreee);
                ddd.appendChild(ourr);
                eee.appendChild(ivee);
                fff.appendChild(ixx);
                ggg.appendChild(evenn);
                hhh.appendChild(ightt);
                kkk.appendChild(inee);
                jjj.appendChild(enn);



               // }


            }
            getApi();



   