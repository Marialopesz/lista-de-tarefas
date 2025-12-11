import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  CircleAlert,
  List,
  ListCheck,
  Plus,
  SquarePen,
  Trash,
  Trash2,
  Sigma,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader className="gap-2 flex">
          <Input placeholder="Adicionar tarefa" />
          <Button className="bg-purple-500 text-white hover:text-white hover:bg-purple-600">
            <Plus />
            Cadastrar
          </Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-4" />
          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant="default">
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <CircleAlert />
              Não Finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Check />
              Concluídas
            </Badge>
          </div>

          <div className="mt-4 border-b">
            <div className=" h-14 flex justify-between items-center border-t ">
              <div className="w-2 h-full bg-purple-500"></div>
              <p className="flex-1 px-2 w-1 text-sm">Tarefa 1</p>
              <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen size={16} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar Tarefa</DialogTitle>
                      <div className="flex gap-2">
                        <Input placeholder="Editar tarefa..." />
                        <Button>Confirmar</Button>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <Trash size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex mt-2 items-center gap-2">
              <ListCheck size={16} />
              <p className="text-sm">Tarefas Concluídas(3/3)</p>
            </div>
            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-xs h-7 cursor-pointer"
                  >
                    <Trash2 /> Limpar tarefas concluidas
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Tem certeza que deseja excluir X items?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Continuar</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="bg-gray-200 h-2 mt-6 rounded-full">
            <div
              className="bg-purple-600 h-full rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex justify-end mt-4 items-center gap-1">
            <Sigma size={16} />
            <p className="text-sm ">3 tarefas no total</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;
