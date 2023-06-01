package spages

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"

	op "github.com/SG143s/kweekStop/ecommerce/op"
	sqop "github.com/SG143s/kweekStop/ecommerce/sqlmain"
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func PaHome(c *gin.Context) {
	session := sessions.Default(c)
	var pjson strs.Home
	logIn := session.Get("loggedIn")
	if logIn == false {
		pjson.Prof.Log = false
	} else {
		pjson.Prof = sqop.GetUserIn(session.Get("userId").(string))
	}
	pjson = op.HomeGen(pjson)
	c.JSON(200, pjson)
}

func PaProd(c *gin.Context) {
	session := sessions.Default(c)
	var pjson strs.Prods
	logIn := session.Get("loggedIn")
	if logIn == false {
		pjson.Prof.Log = false
	} else {
		pjson.Prof = sqop.GetUserIn(session.Get("userId").(string))
	}
	pjson = op.ProdGen(pjson, "-")
	c.JSON(200, pjson)
}

func ChProd(c *gin.Context) {
	session := sessions.Default(c)
	var pjson strs.Prods
	logIn := session.Get("loggedIn")
	if logIn == false {
		pjson.Prof.Log = false
	} else {
		pjson.Prof = sqop.GetUserIn(session.Get("userId").(string))
	}
	pjson = op.ProdGen(pjson, "ch")
	c.JSON(200, pjson)
}

func ExProd(c *gin.Context) {
	session := sessions.Default(c)
	var pjson strs.Prods
	logIn := session.Get("loggedIn")
	if logIn == false {
		pjson.Prof.Log = false
	} else {
		pjson.Prof = sqop.GetUserIn(session.Get("userId").(string))
	}
	pjson = op.ProdGen(pjson, "ex")
	c.JSON(200, pjson)
}

func PoProd(c *gin.Context) {
	session := sessions.Default(c)
	var pjson strs.Prods
	logIn := session.Get("loggedIn")
	if logIn == false {
		pjson.Prof.Log = false
	} else {
		pjson.Prof = sqop.GetUserIn(session.Get("userId").(string))
	}
	pjson = op.ProdGen(pjson, "pop")
	c.JSON(200, pjson)
}
