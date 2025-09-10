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
        echo "Entering the development environment!"
        echo "Node: $(node -v), pnpm: $(pnpm -v)"

        alias dev="pnpm run dev"
        alias build="pnpm run build"
        alias start="pnpm run start"
        alias format="pnpm run format"

        echo "Aliases:"
        echo '    dev="pnpm run dev"'
        echo '    build="pnpm run build"'
        echo '    start="pnpm run start"'
        echo '    format="pnpm run format"'

        trap 'echo "Leaving the development environment!"' EXIT
      '';
    };
  };
}
