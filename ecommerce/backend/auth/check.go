package auth

import (
	"github.com/gin-contrib/sessions"
)

func ChAuth(sess sessions.Session) bool {
	logIn := sess.Get("loggedIn")
	if logIn == false {
		return false
	} else {
		return true
	}
}
