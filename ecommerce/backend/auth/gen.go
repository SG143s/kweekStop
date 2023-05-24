package auth

import (
	"crypto/rand"
	"encoding/base64"
	"strings"
)

func ranStr() (string, error) {
	buffer := make([]byte, 32)
	_, err := rand.Read(buffer)
	if err != nil {
		return "", err
	}

	randomString := base64.URLEncoding.EncodeToString(buffer)
	randomString = clean(randomString)

	return randomString[:32], nil
}

func clean(randomString string) string {
	randomString = strings.ReplaceAll(randomString, "+", "-")
	randomString = strings.ReplaceAll(randomString, "/", "_")

	return randomString
}
