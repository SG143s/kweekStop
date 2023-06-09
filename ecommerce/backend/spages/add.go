package spages

import (
	"strconv"
	"time"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"

	au "github.com/SG143s/kweekStop/ecommerce/auth"
	op "github.com/SG143s/kweekStop/ecommerce/op"
	sqop "github.com/SG143s/kweekStop/ecommerce/sqlmain"
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func RegUs(c *gin.Context) {
	session := sessions.Default(c)
	session = SessTry(session)
	var info strs.UserReg
	if err := c.ShouldBindJSON(&info); err != nil {
		c.JSON(400, gin.H{"error": "Invalid requestt"})
		return
	}

	var reg strs.UserInfo
	reg.Name = info.Name
	reg.Email = info.Email
	reg.Password = info.Password
	reg.ProfilePic = info.ProfilePic
	reg.UserName = info.UserName

	check := true
	var uid string
	for check {
		uid = op.RandStringRunes(2) + op.RandNumRunes(4)
		check = sqop.CheckUserExist(uid)
	}

	reg.ID = uid

	ent := sqop.UsRegis(reg)
	if ent {
		c.Redirect(302, "/login")
	} else {
		c.JSON(400, gin.H{"error": "Invalid requestst"})
	}
}

func CartAdd(c *gin.Context) {
	session := sessions.Default(c)
	logIn := au.ChAuth(session)
	if !logIn {
		c.JSON(401, gin.H{"error": "User Not Logged In"})
	} else {
		uid := session.Get("userId").(string)
		var info strs.ProdCAdd
		if err := c.ShouldBindJSON(&info); err != nil {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		ent := sqop.CartAdd(info, uid)
		if !ent {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		c.JSON(200, gin.H{"status": "ok"})
	}
}

func ButtonCart1(c *gin.Context) {
	session := sessions.Default(c)
	logIn := au.ChAuth(session)
	if !logIn {
		c.JSON(401, gin.H{"error": "User Not Logged In"})
	} else {
		uid := session.Get("userId").(string)
		var info strs.ProdCAdd
		if err := c.ShouldBindJSON(&info); err != nil {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		ent := sqop.CartOp1(info, uid)
		if !ent {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		c.JSON(200, gin.H{"status": "ok"})
	}
}

func ButtonCart2(c *gin.Context) {
	session := sessions.Default(c)
	logIn := au.ChAuth(session)
	if !logIn {
		c.JSON(401, gin.H{"error": "User Not Logged In"})
	} else {
		uid := session.Get("userId").(string)
		var info strs.ProdCAdd
		if err := c.ShouldBindJSON(&info); err != nil {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		ent := sqop.CartOp2(info, uid)
		if !ent {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		c.JSON(200, gin.H{"status": "ok"})
	}
}

func ButtonCart3(c *gin.Context) {
	session := sessions.Default(c)
	logIn := au.ChAuth(session)
	if !logIn {
		c.JSON(401, gin.H{"error": "User Not Logged In"})
	} else {
		uid := session.Get("userId").(string)
		var info strs.ProdCAdd
		if err := c.ShouldBindJSON(&info); err != nil {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		ent := sqop.CartOp3(info, uid)
		if !ent {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		c.JSON(200, gin.H{"status": "ok"})
	}
}

func Checkout(c *gin.Context) {
	session := sessions.Default(c)
	logIn := au.ChAuth(session)
	if !logIn {
		c.JSON(401, gin.H{"error": "User Not Logged In"})
	} else {
		check := true
		uid := session.Get("userId").(string)
		var oid string
		for check {
			oid = op.RandStringRunes(2) + "-" + op.RandNumRunes(5)
			check = sqop.CheckOrderExist(uid, oid)
		}
		now := time.Now()
		y, m, d := now.Date()
		mint := int(m)
		var mstr string
		var dstr string
		if mint < 10 {
			mstr = "0" + strconv.Itoa(mint)
		}
		if d < 10 {
			dstr = "0" + strconv.Itoa(d)
		}
		date := strconv.Itoa(y) + "-" + mstr + "-" + dstr
		var paydetid string
		check = true
		for check {
			paydetid = op.RandStringRunes(3) + op.RandNumRunes(3)
			check = sqop.CheckPayExist(paydetid)
		}
		var ent bool
		ent = sqop.AddPayDet(paydetid)
		if !ent {
			c.JSON(400, gin.H{"error": "Unable to add payment details"})
		}
		ent = sqop.AddOrder(uid, oid, date, paydetid)
		if !ent {
			c.JSON(400, gin.H{"error": "Unable to add orders"})
		}
		cart := sqop.GetCart(uid)
		for _, data := range cart.Data {
			pid := data.ID
			quan := data.Quantity
			ent = sqop.AddOrDet(oid, pid, quan)
			if !ent {
				c.JSON(400, gin.H{"error": "Unable to add order detail(s)"})
			}
		}
		tot := int(sqop.GetTotP(paydetid))
		res := op.Paytest(paydetid, tot)
		ent = sqop.DeleteCart(uid)
		if !ent {
			c.JSON(400, gin.H{"error": "Unable to delete cart"})
		}
		c.Redirect(302, res)
	}
}

func AddProd(c *gin.Context) {
	session := sessions.Default(c)
	logIn := au.ChAuth(session)
	if !logIn {
		c.JSON(401, gin.H{"error": "User Not Logged In"})
	} else {
		uid := session.Get("userId").(string)
		var info strs.ProdAdd
		if err := c.ShouldBindJSON(&info); err != nil {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		ent := sqop.AddProd(uid, info)
		if !ent {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		c.JSON(200, gin.H{"status": "ok"})
	}
}

func AddShop(c *gin.Context) {
	session := sessions.Default(c)
	logIn := au.ChAuth(session)
	if !logIn {
		c.JSON(401, gin.H{"error": "User Not Logged In"})
	} else {
		uid := session.Get("userId").(string)
		var info strs.ShopAdd
		if err := c.ShouldBindJSON(&info); err != nil {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		ent := sqop.AddShop(uid, info)
		if !ent {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		c.JSON(200, gin.H{"status": "ok"})
	}
}

func DeleteProd(c *gin.Context) {
	session := sessions.Default(c)
	logIn := au.ChAuth(session)
	if !logIn {
		c.JSON(401, gin.H{"error": "User Not Logged In"})
	} else {
		uid := session.Get("userId").(string)
		var info string
		if err := c.ShouldBindJSON(&info); err != nil {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		ent := sqop.CheckShopAuth(uid, sqop.GetProdShop(info))
		if !ent {
			c.JSON(401, gin.H{"error": "Unauthorized"})
			return
		}
		ent = sqop.DeleteProd(info)
		if !ent {
			c.JSON(400, gin.H{"error": "Invalid request"})
			return
		}
		c.JSON(200, gin.H{"status": "ok"})
	}
}
