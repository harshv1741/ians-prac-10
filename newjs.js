       
        function mul_inv(a, b) {
            var b0 = b;
            var x0 = 0;
            var x1 = 1;
            var q, tmp;
            if (b == 1) {
                return 1;
            }
            while (a > 1) {
                q = parseInt(a / b);
                tmp = a;
                a = b;
                b = tmp % b;
                tmp = x0;
                x0 = x1 - (q * x0);
                x1 = tmp;
            }
            if (x1 < 0) {
                x1 = x1 + b0;
            }
            return x1;
        }
        function opr() {
            var a1 = parseInt(document.getElementById("a1").value);
            var a2 = parseInt(document.getElementById("a2").value);
            var a3 = parseInt(document.getElementById("a3").value);
            var m1 = parseInt(document.getElementById("m1").value);
            var m2 = parseInt(document.getElementById("m2").value);
            var m3 = parseInt(document.getElementById("m3").value);
            var num = [];
            num.push(a1);
            num.push(a2);
            num.push(a3);
            var rem = [];
            rem.push(m1);
            rem.push(m2);
            rem.push(m3);
            var k = 3;
            var m = m1 * m2 * m3;
            var N1 = m / m1;
            var N2 = m / m2;
            var N3 = m / m3;
            var m_inv1 = mul_inv(N1, m1);
            var m_inv2 = mul_inv(N2, m2);
            var m_inv3 = mul_inv(N3, m3);
            var x = ((a1 * N1 * m_inv1) + (a2 * N2 * m_inv2) + (a3 * N3 * m_inv3)) % m;
            document.getElementById("result").innerHTML = "The value of X is: " + x;
    }
       
       //for menuicon animation
      const menubtn=document.querySelector('.menuicon');
      let menuOpen=false;
      menubtn.addEventListener('click',()=> {
        if(!menuOpen){
            menubtn.classList.add('open');
            menuOpen = true;
        }
        else{
             menubtn.classList.remove('open');
             menuOpen =false;
        }
      })

    
