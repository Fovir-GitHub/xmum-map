{
  description = "DevShell for Next.JS";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {inherit system;};
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs
      ];

      shellHook = ''
        ensure_pnpm_package() {
          local pkg=$1
          local pkg_name="''${pkg%%@*}"

          if pnpm list --depth=0 | grep "$pkg_name" &>/dev/null; then
            echo "$pkg installed"
          else
            echo "Installing $pkg..."
            pnpm add "$pkg"
          fi
        }

        ensure_pnpm_package react@latest
        ensure_pnpm_package react-dom@latest
        ensure_pnpm_package next@latest

        echo "Entering the development environment!"
        echo "Node: $(node -v), pnpm: $(pnpm -v)"

        alias dev="pnpm run dev"
        alias build="pnpm run build"
        alias start="pnpm run start"

        trap 'echo "Leaving the development environment!"' EXIT
      '';
    };
  };
}
