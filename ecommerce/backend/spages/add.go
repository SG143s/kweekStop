package spages

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"

	au "github.com/SG143s/kweekStop/ecommerce/auth"
	sqop "github.com/SG143s/kweekStop/ecommerce/sqlmain"
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func RegUs(c *gin.Context) {
	session := sessions.Default(c)
	session = SessTry(session)
	var info strs.UserInfo
	if err := c.ShouldBindJSON(&info); err != nil {
		c.JSON(400, gin.H{"error": "Invalid requestt"})
		return
	}
	ent := sqop.UsRegis(info)
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
		}
	}
}
