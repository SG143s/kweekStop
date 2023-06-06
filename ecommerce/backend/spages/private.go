package spages

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"

	au "github.com/SG143s/kweekStop/ecommerce/auth"
	sqop "github.com/SG143s/kweekStop/ecommerce/sqlmain"
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func Profile(c *gin.Context) {
	session := sessions.Default(c)
	logIn := au.ChAuth(session)
	if !logIn {
		c.JSON(401, gin.H{"error": "User Not Logged In"})
	} else {
		uid := session.Get("userId").(string)
		var Profile strs.Profile
		Profile.Base.ID = uid
		Profile = sqop.GetProfile(Profile)
		c.JSON(200, Profile)
	}
}
