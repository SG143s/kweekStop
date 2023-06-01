package handler

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"

	au "github.com/SG143s/kweekStop/ecommerce/auth"
	pg "github.com/SG143s/kweekStop/ecommerce/spages"
)

func Start() {
	r := gin.Default()
	store := cookie.NewStore([]byte("secret"))
	r.Use(sessions.Sessions("mysession", store))

	r.GET("/", func(c *gin.Context) {
		session := sessions.Default(c)

		logIn := session.Get("loggedIn")
		if logIn == nil {
			session.Set("loggedIn", false)
		}
		session.Save()
		c.Redirect(302, "/home")
	})
	r.GET("/home", pg.PaHome)
	r.GET("/products")
	r.POST("/login", au.LogIn)
	r.GET("/logout", au.LogOut)
	r.Run(":8000")
}
