<template>
  <div id="wrapper">
    <!-- Content Wrapper. Contains page content -->
    <!-- <div class="content-wrapper">
     
        <section class="content-header">
            <h1>
                {{$route.meta.title}}
                <small>可选描述</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
                <li class="active">这里</li>
            </ol>
        </section> -->

        <!-- Main content -->
        <!-- <section class="content container-fluid"> -->

            <!--------------------------
              | Your Page Content Here |
              -------------------------->
            {{$route.name}}({{$route.path}})

        <!-- </section> -->
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
</template>

<script>
export default {
	name: "Home",
}
</script>