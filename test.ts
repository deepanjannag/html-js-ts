function gcd(a: number, b: number, c: number): number {
  if (a == 0)
    return b == 0 ? c : gcd(c, b, 0);
  return gcd(b % a, c % a, a);
}
