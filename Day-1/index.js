function time() {
        let time = new Date();
        let h = time.getHours();
        let m = time.getMinutes();
        let s = time.getSeconds();
        let peroid = h >= 12 ? "PM" : "AM";
        if (h == 0) {
          h = 12;
        }
        if (h > 12) {
          h = h - 12;
          //peroid="PM";
        }
        h = h < 10 ? "0" + h : h; // if h is less than 10 then add 0 before h ex.09 otherwise return h ex.10
        m = m < 10 ? "0" + m : m; // if m is less than 10 then add 0 before m ex.09 otherwise return m ex.10
        s = s < 10 ? "0" + s : s; // if s is less than 10 then add 0 before s ex.09 otherwise return s ex.10 
        let time1 = h + ":" + m + ":" + s + " " + peroid;
        document.querySelector("#clock").innerText = time1;
      
      }
      setInterval(() => {
        time();
      }, 1000);
      // console.log(time1);
