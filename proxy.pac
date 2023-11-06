function FindProxyForURL(url, host) {
    const proxy = "PROXY localhost:3128";
    if (shExpMatch(host, "jenkins-development.turing.com|github.com")) {
        return proxy;
    }

    // by default use no proxy
    return "DIRECT";
}
