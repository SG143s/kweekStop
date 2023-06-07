package auth

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"

	sqop "github.com/SG143s/kweekStop/ecommerce/sqlmain"
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func LogIn(c *gin.Context) {
	session := sessions.Default(c)
	var user strs.LogInf
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(400, gin.H{"error": "Invalid request"})
		return
	}
	if !sqop.CheckAuth(user.Username, user.Password) {
		c.JSON(401, gin.H{"error": "Invalid email or password"})
		return
	}
	session.Set("loggedIn", true)
	session.Set("userId", sqop.GetIdUname(user.Username))
	session.Save()
	c.Redirect(302, "/")
}

func LogOut(c *gin.Context) {
	session := sessions.Default(c)

	session.Clear()
	session.Save()
	c.Redirect(302, "/")
}
