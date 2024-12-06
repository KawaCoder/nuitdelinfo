export default CookieCauchemar;
type CookieCauchemar = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<Record<string, never>>): void;
};
declare const CookieCauchemar: import("svelte").Component<Record<string, never>, {}, "">;
