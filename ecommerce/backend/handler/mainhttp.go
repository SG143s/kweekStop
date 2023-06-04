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

	r.GET("/", pg.PaHome)
	r.GET("/products", pg.PaProd)
	r.GET("/products#sort=expensive", pg.ExProd)
	r.GET("/products#sort=cheap", pg.ChProd)
	r.GET("/products#sort=popular", pg.PoProd)
	r.POST("/login", au.LogIn)
	r.GET("/logout", au.LogOut)
	r.Run(":8000")
}
