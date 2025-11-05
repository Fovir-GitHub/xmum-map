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
        pnpm
      ];

      shellHook = ''
        echo "Entering the development environment!"
        echo "Node: $(node -v), pnpm: $(pnpm -v)"

        echo "Justfile:"
        echo '    just dev="pnpm run dev"'
        echo '    just build="pnpm run build"'
        echo '    just start="pnpm run start"'
        echo '    just format="pnpm run format"'
      '';
    };
  };
}
