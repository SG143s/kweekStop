package auth

import (
	"golang.org/x/crypto/argon2"
)

func saltGen() string {
	salt, err := ranStr()
	if err != nil {
		panic(err)
	}
	return salt
}

func Hash(password string) string {
	t := 1
	m := 64
	p := 4
	l := 32
	salt := saltGen()

	hash := argon2.IDKey([]byte(password), []byte(salt), uint32(t), uint32(m), uint8(p), uint32(l))
	strHash := string(hash)

	pass := encHash(strHash, salt)
	return pass
}
