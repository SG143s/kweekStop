package auth

import (
	"encoding/base64"
	"strings"
)

func encHash(pass string, salt string) string {
	str := pass + "$" + salt
	encoded := base64.StdEncoding.EncodeToString([]byte(str))
	return encoded
}

func decHash(hash string) (string, string) {
	decoded, err := base64.StdEncoding.DecodeString(hash)
	if err != nil {
		panic(err)
	}
	spl := strings.Split(string(decoded), "$")
	salt := spl[1]
	pass := spl[0]
	return pass, salt
}
