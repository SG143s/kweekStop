package auth

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func LogIn(c *gin.Context) {
	session := sessions.Default(c)

	session.Set("loggedIn", true)
	session.Save()
	c.Redirect(302, "/")
}

func LogOut(c *gin.Context) {
	session := sessions.Default(c)

	session.Clear()
	session.Save()
	c.Redirect(302, "/")
}
